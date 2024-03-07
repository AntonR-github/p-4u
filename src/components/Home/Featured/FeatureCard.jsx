import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

const FeatureCard = ({ id, image, name, text, buttonLabel }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="gap-4 border-2 border-secondary bg-slate-100 text-black rounded-xl cursor-pointer hover:scale-95 hover:bg-slate-200 transition duration-200 ease-linear"
        key={id}
        onClick={() => setOpen(true)}>
        <div className="relative h-96">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-t-xl object-top" />
          <div className="absolute inset-0 flex justify-center items-center pt-32">
            <button
              className="text-white lg:text-2xl md:text-xl  bg-primary bg-opacity-50 hover:bg-opacity-70 rounded-full p-5 focus:outline-none"
              onClick={() => setOpen(true)}
            >
              {buttonLabel}
            </button>
          </div>
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            {/* Text */}
            <div className="bg-blue-400 w-full max-h-max absolute z-50 items-center justify-center pb-24">
              <div className="max-w-full  sm:max-w-4xl mx-auto p-4 bg-white rounded-lg">
                <div className="text-center p-3">
                  <button
                    className="bg-red-400 text-white px-3 py-2 rounded hover:scale-95 transition text-xl"
                    onClick={() => setOpen(false)}
                  >
                    &times;
                  </button>
                </div>
                <div className="text-lg p-7 text-right">
                  {text}
                </div>
              </div>
            </div>

          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default FeatureCard;

