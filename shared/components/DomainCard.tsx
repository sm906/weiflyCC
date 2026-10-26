type Props = {
  domain: string
  title: string
  description: string
  color: string
}

export default function DomainCard({
  domain,
  title,
  description,
  color,
}: Props) {
  return (
    <a
      href={`https://${domain}`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/80
        p-6
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-slate-600
      "
    >
      <div
        className="
          absolute
          -right-16
          -top-16
          h-40
          w-40
          rounded-full
          blur-3xl
          opacity-20
          transition-all
          duration-500
          group-hover:opacity-40
        "
        style={{
          backgroundColor: color,
        }}
      />

      <div
        className="mb-4 h-1 w-20 rounded-full"
        style={{
          backgroundColor: color,
        }}
      />

      <p className="text-xs text-slate-500">
        {domain}
      </p>

      <h3 className="mt-2 text-xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 text-slate-400">
        {description}
      </p>

      <div className="mt-6 text-sm font-medium text-cyan-400">
        立即進入 →
      </div>
    </a>
  )
}
