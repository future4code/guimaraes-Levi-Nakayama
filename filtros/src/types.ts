export type account = {
   id: string
   title: string
   description: string
   userId: string
   createdAt: number
}

export type user = {
   id: string
   name: string
   email: string
   type: string
   account?: account[]
}