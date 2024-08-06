function HomeItem({ title }) {
  return(
  <>
    <input type="number" name={title} min="0" defaultValue={0} />
  </>
)}
export default HomeItem;
