import React from 'react'
import { Card, CardContent, CardFooter } from './ui/card'
import Image from 'next/image'
import { Button } from './ui/button'

export default function HomeMain() {
  return (
    <main className="container mx-auto px-4 py-8">
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-4">블로그 만들기 프로젝트</h1>
          <p className="text-xl text-muted-foreground mb-4">
            안녕하세요<br />
            CNU 24-fall 블꾸 프로젝트 입니다
          </p>
        </section>

        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">나의 포스팅</h2>
            <Button  variant="ghost" className="text-muted-foreground">
              모든 글 보기 →
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { date: "2024.08.31", title: "방학부터 개강 하루 전까지 있었던 일들" },
              { date: "2024.09.15", title: "추석 연휴에 핀토스를 하고있는 나를 보며" },
              { date: "2024.09.16", title: "그들이 온다." },
              { date: "2023.09.20", title: "유연한 변화를 위해 필요한 것은 무엇일까?" },
            ].map((post, index) => (
              <Card key={index}>
                <CardContent className="p-0">
                  <Image src={''} alt="썸네일" className="w-full h-48 object-cover bg-slate-200" />
                </CardContent>
                <CardFooter className="flex flex-col items-start p-4">
                  <time className="text-sm text-muted-foreground mb-2">{post.date}</time>
                  <h3 className="font-semibold">{post.title}</h3>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
  )
}
