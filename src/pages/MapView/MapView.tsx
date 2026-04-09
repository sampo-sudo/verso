import { useNavigate, Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import MapSearch from "../../components/MapSearch/MapSearch";
import BottomToggle from "../../components/BottomToggle/BottomToggle";
import CertBadges from "../../components/CertBadges/CertBadges";
import { useFilters } from "../../context/FilterContext";
import shops from "../../data/shops.json";
import type { Shop } from "../../data/types";
import styles from "./MapView.module.css";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const shopImages = import.meta.glob<{ default: string }>(
  "../../assets/shops/*.jpg",
  { eager: true }
);

function getShopImage(shopId: string): string | undefined {
  const match = Object.entries(shopImages).find(([path]) =>
    path.endsWith(`/${shopId}.jpg`)
  );
  return match?.[1].default;
}

const allShops: Shop[] = shops as Shop[];

const YOU_ARE_HERE: [number, number] = [60.169757482713855, 24.934249842494697];

const youAreHereIcon = L.divIcon({
  html: `<div class="${styles.youAreHere}"><div class="${styles.youAreHerePulse}"></div><div class="${styles.youAreHereDot}"></div></div>`,
  className: "",
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

const createCustomIcon = (shopName: string) => {
  return L.divIcon({
    html: `<div class="${styles.customMarker}"><img src="${markerIcon}" alt="marker" class="${styles.markerIcon}" /><span class="${styles.markerText}">${shopName}</span></div>`,
    className: 'custom-div-icon',
    iconSize: [50, 40],
    iconAnchor: [12, 41],
  });
};

export default function MapView() {
  const navigate = useNavigate();
  const { filters } = useFilters();

  const filteredShops = allShops.filter((shop) => {
    if (
      filters.searchQuery &&
      !shop.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
      filters.certifications.some((cert) => !shop.certifications.includes(cert)) ||
      !(shop.priceLevel <= filters.maxPrice) ||
      !(shop.rating >= filters.minRating) ||
      filters.clothes.some((c) => !shop.clothes.includes(c))
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className={styles.container}>
      <div className={styles.topBarWrapper}>
        <MapSearch
          onButtonClick={() => navigate("/filter")}
        />
      </div>

      <MapContainer
        center={[60.1699, 24.9384]}
        zoom={14}
        className={styles.map}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={YOU_ARE_HERE} icon={youAreHereIcon} interactive={false} />
        {filteredShops.map((shop) => (
          <Marker
            key={shop.id}
            position={[shop.coordinates.lat, shop.coordinates.lng]}
            icon={createCustomIcon(shop.name)}
          >
            <Popup>
              <div className={styles.popupName}>{shop.name}</div>
              {getShopImage(shop.id) && (
                <img
                  src={getShopImage(shop.id)}
                  alt={shop.name}
                  className={styles.popupImage}
                />
              )}
              <CertBadges certifications={shop.certifications} size="popup" noWrap />
              <Link to={`/shop/${shop.id}`} className={styles.popupLink}>
                Näytä kauppa
              </Link>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <div className={styles.bottomWrapper}>
        <BottomToggle activeView="map" />
      </div>
    </div>
  );
}
