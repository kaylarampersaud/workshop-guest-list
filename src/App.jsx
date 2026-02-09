import { useState } from "react";

import GuestDetails from "./guestDetails";
import GuestList from "./guestList";

/** Switch between guests & details of a single guest */
export default function App() {
  const [guestId, setGuestId] = useState(null);
  return (
    <main>
      {guestId ? (
        <GuestDetails guestId={guestId} setGuestId={setGuestId} />
      ) : (
        <GuestList setGuestId={setGuestId} />
      )}
    </main>
  );
}
