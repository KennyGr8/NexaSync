import { useState, useEffect } from "react";
import { useStreamVideoClient, Call } from "@stream-io/video-react-sdk"; // ✅ Correct import

const useGetCallById = (id: string | string[]) => {
  const [call, setCall] = useState<Call | null>(null);
  const [isCallLoading, setIsCallLoading] = useState(true);

  const client = useStreamVideoClient();

  useEffect(() => {
    if (!client || !id) return;

    const getCall = async () => {
      try {
        const call = client.call("default", id as string);
        await call.get();
        setCall(call); // ✅ Now `call` matches the imported `Call` type
        setIsCallLoading(false);
      } catch (error) {
        console.error("Error fetching call:", error);
        setIsCallLoading(false);
      }
    };

    getCall();
  }, [client, id]);

  return { call, isCallLoading };
};

export default useGetCallById;
