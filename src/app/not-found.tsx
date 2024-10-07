import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-md">
        <AlertCircle className="mx-auto h-20 w-20 text-muted-foreground" />
        <h1 className="text-3xl font-bold tracking-tight">
          404 - 페이지를 찾을 수 없습니다
        </h1>
        <p className="text-lg text-muted-foreground">
          죄송합니다. 요청하신 페이지를 찾을 수 없습니다. URL을 확인하시거나
          아래 버튼을 클릭하여 홈페이지로 이동해주세요.
        </p>
        <div className="flex justify-center">
          <Button asChild size="lg">
            <Link href="/">홈페이지로 이동</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
