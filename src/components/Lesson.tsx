import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom'
import classNames from 'classnames'

interface LessonProps {
  title: string
  lessonSlug: string
  availableAt: Date
  type: 'live' | 'class'
}

export function Lesson({ title, lessonSlug, availableAt, type }:LessonProps) {
  const { slug } = useParams<{ slug: string }>()
  
  const isActiveLesson = slug === lessonSlug

  const isLessonAvailable = isPast(availableAt)
  const availableDatFormatted = format(availableAt, "EEEE' • 'd' de 'MMM' • 'k'h'mm" ,{
    locale: ptBR,
  })

  return (
    <Link to={`/event/lesson/${lessonSlug}`} className="group">

      <span className="text-gray-300">
        { availableDatFormatted }
      </span>

      <div className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ${isActiveLesson&&'bg-green-500'}`}>
        <header className="flex items-center justify-between">
          {
            isLessonAvailable ? (
              <span className={`text-sm font-medium flex gap-2 items-center ${isActiveLesson?'text-white':'text-blue-500'}`}>
                <CheckCircle size={20}/>
                Conteúdo liberado
              </span>
            ): (
              <span className="text-sm text-orange-500 font-medium flex gap-2 items-center">
                <Lock size={20}/>
                Em breve
              </span>
            )
          }
          
          
          {/* <span className={`text-xs rounded py-[2px] px-2 text-white border font-bold ${isActiveLesson?'border-white':'border-green-300'}`}>
            { type==='live'?'AO VIVO':'AULA PRÁTICA' }
          </span> */}

          <span className={classNames("text-xs rounded py-[2px] px-2 text-white border font-bold", {
            "border-green-300" : !isActiveLesson,
            "border-white" : isActiveLesson,
          })}>
            { type==='live'?'AO VIVO':'AULA PRÁTICA' }
          </span>


        </header>

        <strong className={`mt-5 block ${isActiveLesson?'text-white':'text-gray-200'}`}>
          { title }
        </strong>
      </div>
    </Link>
  )
}

