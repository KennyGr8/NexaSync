'use client'

import { useRouter } from 'next/navigation'

import { useUserRole } from '@/hooks/useUserRole'

import InterviewScheduleUI from './InterviewScheduleUI'

import LoaderUI from '@/components/useful/LoaderUI'

function SchedulePage() {
  const router = useRouter()

  const { isInterviewer, isLoading } = useUserRole()

  if (isLoading) return <LoaderUI />
  if (!isInterviewer) return router.push('/')

  return <InterviewScheduleUI />
}
export default SchedulePage
