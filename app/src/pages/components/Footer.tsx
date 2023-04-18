import { FlexBox, Title } from '@ui5/webcomponents-react'

const Footer = () => {
  return (
    <footer className='footer' style={{ maxWidth: '100%' }}>
      <FlexBox justifyContent='Center'>
        <Title level='H2' style={{ color: 'white' }}>
          website developed for poc
        </Title>
      </FlexBox>
    </footer>
  )
}

export default Footer
