import styles from "./Filter.module.css";
import { BsFilterLeft } from "react-icons/bs";

const locations = ["Pune","Hadapsar","Viman Nagar","Hinjewadi","Magarpatta"]
export default function Filter({
  onLocationChange,
  onPriceChange,
  onTypeChange
}) {
  const priceRanges = [
    { label: "₹0 - ₹2000", min: 0, max: 2000 },
    { label: "₹2000 - ₹5000", min: 2000, max: 5000 },
    { label: "₹5000 - ₹10000", min: 5000, max: 10000 },
    { label: "₹10000 - ₹15000", min: 10000, max: 15000 }
  ];

  const propertyTypes = ["Single", "Double", "1BHK", "2BHK"];

  return (
    <>
    <div className={styles.filterContainer}>
      {/* Popular Locations */}
      <div id={styles.filterHeader}>
        <div>
        <BsFilterLeft size={27}></BsFilterLeft>
        <h4 >Filter by</h4>
        </div>
        <button>Apply</button>
      </div>
      <div className={styles.filterSection}>
        <h4>Popular Locations</h4>
        {locations.map((loc) => (
          <label key={loc} className={styles.checkboxLabel}>
            <input
              type="checkbox"
              value={loc}
              onChange={(e) => onLocationChange(e.target.value, e.target.checked)}
            />
            {loc}
          </label>
        ))}
      </div>

      {/* Price Range */}
      <div className={styles.filterSection}>
        <h4>Price</h4>
        {priceRanges.map((range) => (
          <label key={range.label} className={styles.checkboxLabel}>
            <input
              type="checkbox"
              onChange={(e) =>
                onPriceChange(range.min, range.max, e.target.checked)
              }
            />
            {range.label}
          </label>
        ))}
      </div>

      {/* Property Type */}
      <div className={styles.filterSection}>
        <h4>Property Type</h4>
        {propertyTypes.map((type) => (
          <label key={type} className={styles.checkboxLabel}>
            <input
              type="checkbox"
              value={type}
              onChange={(e) => onTypeChange(e.target.value, e.target.checked)}
            />
            {type}
          </label>
        ))}
      </div>
    </div>
    </>
  );
}
