import { Thread } from '@/types';

export const createUserMessage = (message: string): Thread => ({
  name: '임원빈',
  image_url:
    'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  message: message,
});

export const createOpGptMessage = (message: string): Thread => ({
  name: 'OpGPT',
  image_url:
    'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  message: message,
});

export const sampleThreads: Thread[] = [
  createUserMessage('안녕하세요!'),
  createOpGptMessage('안녕하세요! 저는 OpGPT입니다. 무엇을 도와드릴까요?'),
  createUserMessage('오늘 날씨가 어때요?'),
  createOpGptMessage('오늘 날씨는 맑고 화창합니다.'),
  createUserMessage('감사합니다!'),
  createOpGptMessage('별말씀을요!'),
  createUserMessage('안녕히 계세요!'),
  createOpGptMessage('안녕히 가세요!'),
  createUserMessage('React Expo를 시작하려면 어떻게 해야 돼?'),
  createOpGptMessage('React Expo를 시작하려면 다음 명령어를 입력하세요: expo init my-new-project'),
  createUserMessage('감사합니다!'),
  createOpGptMessage('별말씀을요!'),
  createUserMessage('나의 옵을 500개로 만들어줘!'),
  createOpGptMessage('불가능합니다. 옵은 500개 이상으로 만들 수 없습니다.'),
];
