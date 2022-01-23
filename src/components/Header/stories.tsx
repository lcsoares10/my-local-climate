
   
import { Story, Meta } from '@storybook/react/types-6-0'
import Header from './index'

export default {
  title: 'Header',
  component: Header
} as Meta

export const Default: Story = () => (
  <div >
    <Header />
  </div>
)