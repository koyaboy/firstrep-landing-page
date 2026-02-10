import { groq } from "next-sanity";

export const POSTS_QUERY = groq`
  *[_type == "post"] | order(publishedAt desc, _createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "category": coalesce(category->title, category.title, category, "General"),
    "author": author->{
      name,
      role,
      bio,
      avatar
    },
    publishedAt,
    readTime,
    "image": coalesce(mainImage, image){
      ...,
      asset->{
        _id,
        metadata { dimensions { width, height } }
      }
    },
    "bodyText": pt::text(body)
  }
`;

export const POST_BY_SLUG_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "category": coalesce(category->title, category.title, category, "General"),
    "author": author->{
      name,
      role,
      bio,
      avatar
    },
    publishedAt,
    readTime,
    "image": coalesce(mainImage, image){
      ...,
      asset->{
        _id,
        metadata { dimensions { width, height } }
      }
    },
    body[]{
      ...,
      asset->{
        _id,
        metadata { dimensions { width, height } }
      }
    },
    "bodyText": pt::text(body),
    content
  }
`;
