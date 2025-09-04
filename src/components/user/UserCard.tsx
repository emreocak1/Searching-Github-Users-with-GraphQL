import { Button } from "../ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card"

type UserCardProps = {
  avatarUrl:string
  name: string
  bio: string
  url: string
}

const UserCard = ({avatarUrl,name,bio,url}:UserCardProps) => {

  return (
    <Card>
      <CardHeader className="flex-row gap-x-8 items-center">
        <img src={avatarUrl} alt={name} className="size-36 rounded object-cover" />
        <div className="flex flex-col gap-y-2">
          <CardTitle>{name || 'User has not a name'}</CardTitle>
          <CardDescription>{bio || 'User has not a bio'}</CardDescription>
          <Button asChild size='sm' className="w-1/2 mt-2">
            <a href={url} target="_blank" ref='noreferrer'>Follow</a>
          </Button>
        </div>
      </CardHeader>
    </Card>
  )
}

export default UserCard