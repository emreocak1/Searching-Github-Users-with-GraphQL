import { Card, CardDescription, CardTitle } from "../ui/card"


const StatsCard = ({title,count}:{title:string,count:number}) => {

  return (
    <Card>
      <div className="flex flex-row justify-between items-center p-6">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{count}</CardDescription>
      </div>
    </Card>
  )
}

export default StatsCard