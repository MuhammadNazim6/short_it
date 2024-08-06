import { useState } from "react"
import Api from "../services/api"
import validateUrl from "../services/validateUrl"
import toast from "react-hot-toast"
import { CopyToClipboard } from 'react-copy-to-clipboard';

function InputSection() {

  const [isShortening, setIsShortening] = useState(false)
  const [inputUrl, setInputUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')
  const [clicks, setClicks] = useState('')

  const handleShortening = async () => {
    if (!validateUrl(inputUrl)) {
      toast.error('Enter a valid url.')
      return
    }
    setIsShortening(true)
    const response = (await Api.post('/', { url: inputUrl }))
    if (response.status === 200) {
      const { shortUrl, clicks, message } = response.data;
      setShortUrl(shortUrl);
      setClicks(clicks);
      toast.success(message)
    }
    setIsShortening(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputUrl(e.target.value);
  };

  return (
    <>
      <div className="w-full mt-10 flex justify-center">
        <div className="xl:w-3/5 lg:w-4/5 w-full relative">
          <input type="text" placeholder="Type here" className="input input-bordered outline outline-1 w-full rounded-md" value={inputUrl} onChange={handleInputChange} />
          {isShortening
            ? (<button className="btn btn-active btn-secondary absolute right-0 top-0 rounded-md rounded-l-none w-28" onClick={handleShortening}> <span className="loading loading-dots loading-lg"></span>
            </button>)
            : (<button onClick={handleShortening} className="btn btn-active btn-secondary absolute right-0 top-0 rounded-md w-28 rounded-l-none">Shorten Url</button>)}
        </div>
      </div>
      {shortUrl &&
        <>
          <div className="flex justify-center w-full">
            <div className="mockup-browser bg-base-300 border mt-20 flex items-center rounded-md">
              <div className="mockup-browser-toolbar">
                <div className="input">{shortUrl} </div>
              </div>
              <CopyToClipboard text={shortUrl}>
                <button className="border btn btn-secondary rounded-md w-24" onClick={() => { toast.success('Copied to clipboard') }}>Copy</button>
              </CopyToClipboard>
            </div>
          </div>
          <p className="text-center text-lg font-mono mt-4 "><span className=""> {clicks} clicks</span></p>
        </>
      }
    </>
  )
}

export default InputSection