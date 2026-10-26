type Props = {
  title: string
  status: string
}

export default function StatusCard({
  title,
  status,
}: Props) {
  return (
    <div
      className="
      glass
      rounded-3x1
      p-6
      "

    <
      <div className="text-slate-400 text-sm">
        {title}
      </div>

      <div className="mt-3 font-semibold>
        {status}
      </div>
    </div>
  )
}
