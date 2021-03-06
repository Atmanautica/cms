import { GiCondorEmblem } from 'react-icons/gi'

export default {
  name: 'comment',
  type: 'document',
  title: 'Comment',
  icon: GiCondorEmblem,
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'approved',
      type: 'boolean',
      title: 'Approved',
      description: "Comments won't show on the site without approval"
    },
    {
      name: 'email',
      type: 'string',
    },
    {
      name: 'comment',
      type: 'text',
    },
    {
      name: 'post',
      type: 'reference',
      to: [
        {type: 'post'}
      ]
    }
  ],
  preview: {
    select: {
      name: 'name',
      comment: 'comment',
      post: 'post.title'
    },
    prepare({name, comment, post}) {
      return {
        title: `${name} on ${post}`,
        subtitle: comment
      }
    }
  }
}
