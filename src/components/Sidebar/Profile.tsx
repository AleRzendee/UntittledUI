import { LogOut } from 'lucide-react'
import { Button } from '../Button'

export interface ProfileProps { }

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://media.licdn.com/dms/image/v2/D5603AQH_GuLWbO9NMw/profile-displayphoto-shrink_800_800/B56ZXfdXH2GsAc-/0/1743210771421?e=1749081600&v=beta&t=YQEiExmR6GS3JgTDuUUqCCU8WMsW5bz7DzE-70ML3G8"
        className="h-10 w-10 rounded-full"
        alt=""
      />
      <div className="flex flex-col">
        <span className="block text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Gustavo Rezende
        </span>
        <span className="block text-sm text-zinc-500 dark:text-zinc-400">
          gustavo.rezende@gmail.com
        </span>
      </div>
      <Button variant="ghost" className="ml-auto">
        <LogOut className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
      </Button>
    </div>
  )
}
