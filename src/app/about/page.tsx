import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function About() {
  const skills = [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'TailwindCSS',
    'C',
    'C++',
    'Java',
  ];

  const projects = [
    {
      title: '프로젝트 1',
      description: '이 프로젝트에 대한 간단한 설명입니다.',
      technologies: ['React', 'Node.js'],
      link: 'https://naver.com',
      image: '/png/beulping.png',
    },
    {
      title: '프로젝트 2',
      description: '두 번째 프로젝트',
      technologies: ['Next.js', 'TypeScript'],
      link: 'https://google.com',
      image: '/png/beulping.png',
    },
    {
      title: '프로젝트 3',
      description: '세 번째 프로젝트',
      technologies: ['React', 'TailwindCSS'],
      link: 'https://instagram.com',
      image: '/png/beulping.png',
    },
  ];

  return (
    <div className="container mx-auto pb-8 relative px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start mb-8 space-y-4 md:space-y-0 md:space-x-8">
          <Image
            src="/png/beulping.png"
            alt="프로필 사진"
            width={200}
            height={200}
            className="rounded-full"
          />
          <div>
            <h1 className="text-3xl font-bold mb-2">송은수</h1>
            <p className="text-xl text-muted-foreground mb-4">
              프론트엔드 개발자
            </p>
            <p className="text-lg mb-4">
              안녕하세요! 저는 사용자 경험을 중시하는 프론트엔드 개발자입니다.
              복잡한 문제를 해결하고 아름다운 인터페이스를 만드는 것을
              좋아합니다.
            </p>
          </div>
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">기술 스택</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">경력</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>서강대학교 재학중 (2020 - 현재)</li>
              <li>CNU 학회원 (2023 - 현재)</li>
            </ul>
          </CardContent>
        </Card>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">프로젝트</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-card rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      프로젝트 보기 <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">연락처</h2>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon">
                <a
                  href="mailto:your.email@example.com"
                  aria-label="이메일 보내기"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon">
                <a
                  href="https://github.com/naya-h2"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub 프로필"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon">
                <a
                  href="https://linkedin.com/naya-h2"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn 프로필"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
