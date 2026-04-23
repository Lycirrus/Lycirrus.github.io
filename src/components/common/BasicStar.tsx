interface BasicStarProps {
  cnt: number;
}

const BasicStar = ({ cnt }: BasicStarProps) => {
  return (
    <div className="flex gap-0.5 items-center">
      {[...Array(5)].map((_, i) => (
        <div key={i} className={`w-2.5 md:w-3.5 aspect-square rounded-sm ${i < cnt ? "bg-pf-blue" : "bg-pf-gray-100"}`} />
      ))}
    </div>
  )
}

export default BasicStar