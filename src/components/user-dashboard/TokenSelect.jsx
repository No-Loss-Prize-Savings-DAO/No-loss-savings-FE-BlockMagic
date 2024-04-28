import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import Image from "next/image";

export default function SelectBox({ data, initialSelected }) {
  const [selected, setSelected] = useState(initialSelected);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-1">
        <Listbox.Button className="relative w-10 p-2 cursor-pointer text-left shadow-md focus:outline-none border border-grey-500 rounded-xl sm:text-sm">
          <Image
            src={selected.icon}
            alt={selected.name}
            className="w-6 h-6"
            width={24}
            height={24}
          />
        </Listbox.Button>
        <Listbox.Options className="absolute w-32 z-10 -left-20 py-1 mt-2 overflow-auto text-base bg-background border border-grey-500 rounded-2xl shadow-lg max-h-60 sm:text-sm divide-y">
          {data.map((person, personIdx) => (
            <Listbox.Option
              key={personIdx}
              className={({ active }) =>
                `${active ? "text-amber-900 bg-amber-100" : "text-gray-100"}
                            cursor-default select-none relative p-2 flex justify-between items-center `
              }
              value={person}
            >
              {({ selected, active }) => (
                <>
                  <span className="block truncate font-semibold">{person.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <Image
                      src={person.icon}
                      alt={person.name}
                      className="w-6 h-6"
                      width={100}
                      height={100}
                    />
                  </span>
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
}
