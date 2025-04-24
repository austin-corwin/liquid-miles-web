import { createStandaloneToast } from '@chakra-ui/react'
import { TbClipboardCheck } from 'react-icons/tb'
import { toastRecipes } from '../config/recipes/toastRecipes'

const copyToClipboard = async (
  contents: string,
  toastTitle: string = 'Coppied to Clipboard',
  showToast: boolean = true
): Promise<void> => {
  if (!contents) return
  try {
    await navigator.clipboard.writeText(contents)
    const { toast } = createStandaloneToast()
    if (showToast)
      toast({
        title: toastTitle,
        ...toastRecipes.info,
        icon: <TbClipboardCheck size={24} />,
      })
  } catch (error) {
    console.warn('Unable to copy to clipboard', error)
  }
}

export { copyToClipboard }
