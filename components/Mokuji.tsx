import * as React from 'react'
import s from './Mokuji.module.scss'

type Props = {
  title: string
  description: string
  author: string
}

export const Mokuji: React.FC<Props> = (props) => {
  return (
    <div className={s.main}>
      {/*<img className={s.authorImage} src={props.image} />*/}
      <h1 className={s.title}>
        {props.title}
        <span className={s.author}>{props.author}</span>
      </h1>
      <p className={s.description}>{props.description}</p>
    </div>
  )
}
