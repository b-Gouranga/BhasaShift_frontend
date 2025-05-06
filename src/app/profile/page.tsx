import React from "react";

export default function ProfilePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950 text-foreground font-sans">
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-16 sm:py-24 gap-8">
        <div className="bg-card p-8 rounded-2xl shadow-lg w-full max-w-md mx-auto flex flex-col items-center border border-blue-100 dark:border-blue-900">
          <div className="w-28 h-28 rounded-full bg-muted flex items-center justify-center mb-4 border-4 border-blue-200 dark:border-blue-800">
            {/* Avatar placeholder, replace with user image if available */}
            <span className="text-6xl">👤</span>
          </div>
          <h2 className="text-2xl font-bold mb-1">Profile</h2>
          <p className="text-muted-foreground mb-6">Manage your account information</p>
          <div className="w-full space-y-6 text-left">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-muted-foreground">Full Name</label>
              <div className="px-4 py-2 rounded-lg bg-background border border-border font-semibold">{/* TODO: Replace with user name */}John Doe</div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-muted-foreground">Email Address</label>
              <div className="px-4 py-2 rounded-lg bg-background border border-border font-semibold">{/* TODO: Replace with user email */}johndoe@email.com</div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-muted-foreground">Bio</label>
              <div className="px-4 py-2 rounded-lg bg-background border border-border font-normal text-gray-700 dark:text-gray-300 min-h-[48px]">{/* TODO: Replace with user bio */}No bio provided.</div>
            </div>
            {/* Add more profile fields here if needed */}
          </div>
        </div>
      </section>
      <footer className="w-full py-6 border-t border-border bg-background text-center text-sm text-muted-foreground mt-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
          <span>&copy; {new Date().getFullYear()} Assamese AI Tools</span>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="hover:underline">About</a>
        </div>
      </footer>
    </div>
  );
}
