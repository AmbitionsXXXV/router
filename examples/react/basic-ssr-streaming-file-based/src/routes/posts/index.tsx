import * as React from 'react'

export const Route = createFileRoute({
  component: PostsIndexComponent,
  wrapInSuspense: true,
  errorComponent: ({ error }) => {
    return (
      <div className="text-red-500">Failed to load post: {error.message}</div>
    )
  },
})

function PostsIndexComponent() {
  return <div>Select a post.</div>
}
