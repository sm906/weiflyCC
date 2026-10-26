type Props = {
  icon: string
  title: string
  description: string
}

export default function RealmCard({
  icon,
  title,
  description,
}: Props) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/60
        backdrop-blur
        p-8
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-cyan-500
      "
    >
      <div className="text-4xl">
        {icon}
      </div>

      <h3 className="mt-6 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-400">
        {description}
      </p>
    </div>
  )
}
