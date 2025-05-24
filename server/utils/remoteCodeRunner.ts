// 配置语言对应的请求传参
enum Language {
  JavaScript = 'javascript',
  TypeScript = 'typescript',
  Python = 'python',
  Java = 'java',
  CPP = 'cpp',
  C = 'c',
  Wenyan = 'wenyan',
  Rust = 'rust',
}

// 对应语言和main文件名称映射
const langToMainMap: Record<string, string> = {
  [Language.JavaScript]: 'main.js',
  [Language.TypeScript]: 'main.ts',
  [Language.Python]: 'main.py',
  [Language.Java]: 'main.java',
  [Language.CPP]: 'main.cpp',
  [Language.C]: 'main.c',
  [Language.Rust]: 'main.rs',
}

// 请求glot.io
export async function remoteRunner(lang: Language, code: string) {
  const url = `https://glot.io/run/${lang}?version=latest`
  const { stdout, stderr }: any = await $fetch(url, {
    method: 'POST',
    body: {
      files: [{
        name: langToMainMap[lang],
        content: code,
      }],
      command: '',
      stdin: '',
    },
  })

  return {
    stdout,
    stderr,
  }
}
