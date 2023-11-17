import Start from "../../assets/images/estrella.png"
export default function StartList({ number }) {

	const arrayNumber = Array.from({ length: number }, (_, index) => index)

  return (
    <div className="grid grid-cols-7 gap-4">
      {arrayNumber.map((star) => (
        <img src={Start} 
        className="w-12 h-12"
        key={star}/>
      ))}
    </div>
  );
}