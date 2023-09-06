interface props {
    children: React.ReactNode
}
const AlgoContext : React.FC<props> = ({children})=> {
  return (
    <div>{children}</div>
  )
}

export default AlgoContext