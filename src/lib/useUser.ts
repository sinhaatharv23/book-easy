import { useEffect, useState } from 'react';
import { supabase } from './supabase';

export function useUser() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Get the initial user session
    supabase.auth.getUser().then(({ data }) => {
      setUser(data?.user ?? null);
    });

    // Listen for auth changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return user;
}
