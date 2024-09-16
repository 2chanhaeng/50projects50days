export default function Divider() {
  return (
    <>
      <div className="bg-blue-500 my-auto h-1 w-0 has-[~label>input:checked]:w-8 ease-linear duration-100"></div>
      <div className="bg-gray-300 my-auto h-1 w-8 has-[~label>input:checked]:w-0 ease-linear duration-100"></div>
    </>
  );
}
