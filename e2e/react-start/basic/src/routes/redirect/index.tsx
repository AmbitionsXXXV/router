import { Link } from '@tanstack/react-router'

export const Route = createFileRoute({
  component: () => (
    <div>
      <Link
        from={Route.fullPath}
        to="./$target"
        params={{ target: 'internal' }}
        activeProps={{
          className: 'font-bold',
        }}
      >
        internal
      </Link>{' '}
      <Link
        from={Route.fullPath}
        to="./$target"
        params={{ target: 'external' }}
        activeProps={{
          className: 'font-bold',
        }}
      >
        external
      </Link>
    </div>
  ),
})
