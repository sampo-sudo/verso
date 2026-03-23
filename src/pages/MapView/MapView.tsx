import { useNavigate, Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import TopBar from "../../components/TopBar/TopBar";
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

const allShops: Shop[] = shops as Shop[];

export default function MapView() {
  const navigate = useNavigate();
  const { filters, setFilters } = useFilters();

  const filteredShops = allShops.filter((shop) => {
    if (
      filters.searchQuery &&
      !shop.name.toLowerCase().includes(filters.searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  const handleSearchChange = (value: string) => {
    setFilters((prev) => ({ ...prev, searchQuery: value }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.topBarWrapper}>
        <TopBar
          onFilterClick={() => navigate("/filter")}
          searchValue={filters.searchQuery}
          onSearchChange={handleSearchChange}
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
        {filteredShops.map((shop) => (
          <Marker
            key={shop.id}
            position={[shop.coordinates.lat, shop.coordinates.lng]}
          >
            <Popup>
              <div className={styles.popupName}>{shop.name}</div>
              <CertBadges certifications={shop.certifications} size="sm" />
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
