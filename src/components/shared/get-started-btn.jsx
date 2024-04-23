import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

const GetStartedBtn = () => {
    return (
        <Link
        href="/user-dashboard"
        >
        <Button
        variant={"outline"}
        className="py-6 px-7 gap-2 rounded-full border bg-[#0267FF] text-white text-sm w-fit"
        translate="no"
      >
        Get Started
      </Button>
      </Link>
    );
};

export default GetStartedBtn;