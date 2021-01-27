import Link from 'next/link'
import { Image, Link as A } from 'rebass'

export default ({ size = 50, light = false, ...props }) => (
  <Link href="https://dvhacks.tech">
    <A sx={{ cursor: 'pointer', lineHeight: 0 }}>
      <Image
        {...props}
        src="/static/logo.png"
        alt="DVHacks avatar"
        height={30}
        sx={{
          overflow: 'hidden',
          ...props.sx
        }}
      />
    </A>
  </Link>
)
