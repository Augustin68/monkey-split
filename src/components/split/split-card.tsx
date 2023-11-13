import { Group } from '@/models/group'

export default function SplitCard({ split }: { split: Group }) {
  return (
    <div className="flex h-56 w-80 flex-col justify-end border p-5 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
      <p>{split.name}</p>
      <div className="flex gap-3">
        <p>{split.totalAmount} €</p>
        <p>{split.members} p</p>
      </div>
    </div>
  )
}
