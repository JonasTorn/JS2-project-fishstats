import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function Article({ title, content, imageSrc, imagePosition = 'bottom', maxWidth = '2xl' }) {
  return (
    <div className="even:bg-blue-100">
      <Card className={`mx-[10vw] py-12 px-6 max-w-${maxWidth} place-self-center border-none shadow-none bg-transparent`}>
        {imagePosition === 'top' && (
          <img src={imageSrc} className="w-60 place-self-center" alt={title} />
        )}
        
        <CardHeader className="px-0">
          <CardTitle className="scroll-m-20 text-4xl font-bold tracking-tight">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="px-0">
          {content}
        </CardContent>

        {imagePosition === 'bottom' && (
          <img src={imageSrc} className="w-60 place-self-center" alt={title} />
        )}
      </Card>
    </div>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function Article({ title, children, imageSrc, imagePosition = 'bottom', maxWidth = '2xl' }) {
  return (
    <div className="even:bg-blue-100">
      <Card className={`mx-[10vw] py-12 px-6 max-w-${maxWidth} place-self-center border-none shadow-none bg-transparent`}>
        {imagePosition === 'top' && (
          <img src={imageSrc} className="w-60 place-self-center" alt={title} />
        )}
        
        <CardHeader className="px-0">
          <CardTitle className="scroll-m-20 text-4xl font-bold tracking-tight">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="px-0">
          {children}
        </CardContent>

        {imagePosition === 'bottom' && (
          <img src={imageSrc} className="w-60 place-self-center" alt={title} />
        )}
      </Card>
    </div>
  );
}
