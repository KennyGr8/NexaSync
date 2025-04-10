"use client";

import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { Loader2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import ActionCard from "@/components/useful/ActionCard"
import LoaderUI from "@/components/useful/LoaderUI"
import MeetingCard from "@/components/useful/MeetingCard"
import MeetingModal from "@/components/useful/MeetingModal"
import { QUICK_ACTIONS } from "@/constants";
import { useUserRole } from "@/hooks/useUserRole";

import { api } from "../../../../convex/_generated/api";

export default function Home() {
  const router = useRouter();
  const { user, isLoaded } = useUser();
  const userName = isLoaded && user?.firstName ? `Welcome, ${user.firstName}!` : "Welcome, Champ!";

  const { isInterviewer, isLoading } = useUserRole();
  const interviews = useQuery(api.interviews.getMyInterviews);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"start" | "join">();

  const handleQuickAction = (title: string) => {
    switch (title) {
      case "New Call":
        setModalType("start");
        setShowModal(true);
        break;
      case "Join Interview":
        setModalType("join");
        setShowModal(true);
        break;
      default:
        router.push(`/${title.toLowerCase()}`);
    }
  };

  if (isLoading) return <LoaderUI />;

  return (
    <div className='container max-w-7xl mx-auto p-6'>
      {/* WELCOME SECTION */}
      <div className='rounded-lg bg-card p-6 border shadow-sm mb-10'>
        <h1 className='text-4xl font-bold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent'>
          {userName}
        </h1>
        <p className='text-muted-foreground mt-2'>
          {isInterviewer
            ? 'Effectively manage interviews and review candidates with ease.'
            : 'View and prepare for your upcoming interviews effortlessly.'}
        </p>
      </div>

      {isInterviewer ? (
        <>
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {QUICK_ACTIONS.map((action) => (
              <ActionCard
                key={action.title}
                action={action}
                onClick={() => handleQuickAction(action.title)}
              />
            ))}
          </div>

          <MeetingModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            title={modalType === 'join' ? 'Join the moving train' : 'Initiate a quick meeting'}
            isJoinMeeting={modalType === 'join'}
          />
        </>
      ) : (
        <>
          <div>
            <h1 className='text-3xl font-bold'>Your Interviews</h1>
            <p className='text-muted-foreground mt-1'>
              Manage your scheduled interviews, seamlessly review details and
              join with ease.
            </p>
          </div>

          <div className='mt-8'>
            {interviews === undefined ? (
              <div className='flex justify-center py-12'>
                <Loader2Icon className='h-8 w-8 animate-spin text-muted-foreground' />
              </div>
            ) : interviews.length > 0 ? (
              <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {interviews.map((interview) => (
                  <MeetingCard
                    key={interview._id}
                    interview={interview}
                  />
                ))}
              </div>
            ) : (
              <div className='text-center py-12 text-muted-foreground'>
                You currently have no upcoming interviews.
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}
