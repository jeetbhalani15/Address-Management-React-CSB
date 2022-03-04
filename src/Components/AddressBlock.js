export default function AddressBlock({
  name,
  mobileNo,
  address,
  city,
  state,
  pincode,
  id,
  deleteBtn,
  editBtn
}) {
  return (
    <div>
      <article>
        <span>Home</span>
        <div>
          <p>{name}</p>
          <p>{mobileNo}</p>
        </div>
        <address>
          {address} {city} {state} - {pincode}
        </address>
        <button onClick={() => editBtn()}>Edit</button>
        <button onClick={() => deleteBtn(id)}>Delete</button>
      </article>
    </div>
  );
}
