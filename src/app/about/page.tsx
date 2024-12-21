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
            src="/png/developer.png"
            alt="프로필 사진"
            width={200}
            height={200}
            className="rounded-full"
          />
          <div>
            <h1 className="text-3xl font-bold mb-2">블꾸</h1>
            <p className="text-xl text-muted-foreground mb-4">FE Developer</p>
            <p className="text-lg mb-4">
              더 나은 사용자 경험을 제공하기 위해 노력합니다.
              <br />
              <br />한 화면에서 여러 개의 화면이 공존할 수 있도록 바텀시트를
              도입했 습니다. 빠른 반응성을 제공하기 위해 낙관적 업데이트를
              적용했고 소셜 로그인을 도입해 회원가입의 부담을 덜었습니 다. 제가
              불편함을 느꼈던 점은 다른 사람들도 비슷하게 느낄 것이라
              생각했습니다. 코로나 이후 사람들과의 만남이 어려 운 상황을
              해결하고자, 함께 식사할 사람을 연결해주는 매칭 서비스를
              만들었습니다.
              <br />
              <br />
              협업을 중요하게 생각합니다. 개발자, 디자이너, 기획자들과 원활히
              소통하며 방향성을 명확히 설정한 후 프로젝트를 진행합니다. 또한,
              커밋과 PR을 통해 작업 과정을 기록하고 공유하는 것을 생활화하고
              있습니다.
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
