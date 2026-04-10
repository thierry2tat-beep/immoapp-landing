"use client";
import { useEffect, useRef } from "react";

const PINS = [
  { lat: 6.357, lng: 2.401, price: "75K FCFA", active: true,  color: "#4285f4" },
  { lat: 6.351, lng: 2.419, price: "45K FCFA", active: false, color: "#4285f4" },
  { lat: 6.372, lng: 2.416, price: "85K FCFA", active: false, color: "#4285f4" },
  { lat: 6.360, lng: 2.441, price: "250K FCFA",active: false, color: "#ea8c34" },
];

export default function CotonnouMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    // Inject Leaflet CSS once (with SRI for integrity)
    if (!document.getElementById("leaflet-css")) {
      const link = document.createElement("link");
      link.id = "leaflet-css";
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      link.integrity = "sha384-sHL9NAb7lN7rfvG5lfHpm643Xkcjzp4jFvuavGOndn6pjVqS6ny56CAt3nsEVT4H";
      link.crossOrigin = "anonymous";
      document.head.appendChild(link);
    }

    import("leaflet").then((L) => {
      if (!containerRef.current || mapRef.current) return;

      // Fix missing default icons
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      const map = L.map(containerRef.current, {
        center: [6.362, 2.418],
        zoom: 14,
        zoomControl: false,
        attributionControl: false,
        scrollWheelZoom: false,
        dragging: false,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
      }).addTo(map);

      // Attribution bottom-right
      L.control.attribution({ position: "bottomright", prefix: false })
        .addAttribution('© <a href="https://osm.org/copyright">OpenStreetMap</a>')
        .addTo(map);

      // Custom price pins
      PINS.forEach((pin) => {
        const iconHtml = `
          <div style="display:flex;flex-direction:column;align-items:center;filter:drop-shadow(0 3px 6px rgba(0,0,0,0.28));">
            <div style="
              background:${pin.color};
              color:#fff;
              font-size:11px;
              font-weight:800;
              padding:5px 11px;
              border-radius:20px;
              white-space:nowrap;
              letter-spacing:0.2px;
              border:2.5px solid ${pin.active ? "#fff" : "rgba(255,255,255,0.4)"};
            ">${pin.price}</div>
            <div style="
              width:0;height:0;
              border-left:7px solid transparent;
              border-right:7px solid transparent;
              border-top:9px solid ${pin.color};
              margin-top:-1px;
            "></div>
            <div style="
              width:8px;height:8px;
              border-radius:50%;
              background:${pin.color};
              border:2px solid #fff;
              margin-top:-1px;
            "></div>
          </div>
        `;

        const icon = L.divIcon({
          className: "",
          html: iconHtml,
          iconAnchor: [40, 52],
          iconSize: [80, 52],
          popupAnchor: [0, -52],
        });

        L.marker([pin.lat, pin.lng], { icon }).addTo(map);
      });

      mapRef.current = map;
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100%", overflow: "hidden" }} />;
}
