import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"
import { Icons } from "./icons"

const components = {
  Image,
  Icons,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}
