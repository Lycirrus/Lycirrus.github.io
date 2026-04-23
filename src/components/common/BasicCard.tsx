interface BasicCardProps {
  children: React.ReactNode;
  color: string;
}

const ColorMap: { [key: string]: string } = {
  blue: 'before:bg-pf-blue',
  green: 'before:bg-pf-green',
  violet: 'before:bg-pf-violet',
  emerald: 'before:bg-pf-emerald',
}

const BasicCard = ({ children, color }: BasicCardProps) => {
  const before = `before:content-[''] before:absolute before:top-1/32 before:-left-0.5 before:h-15/16 before:w-0.75 ${ColorMap[color]} before:rounded-l-xl`

  return (
    <div className={`relative flex flex-col justify-center gap-3 bg-pf-white rounded-lg border border-pf-gray-100 p-3 ${before}`}>
      {children}
    </div>
  )
}

export default BasicCard