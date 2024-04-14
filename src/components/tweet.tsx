import { Tweet, getTweet } from "react-tweet/api";
import { EmbeddedTweet, TweetNotFound, type TweetProps } from "react-tweet";

import "styles/tweet.css";

const TweetContent = async ({ id, components, onError }: TweetProps) => {
  let error: any = null;
  let tweet: Tweet | null = null;

  try {
    if (!id) throw new Error("Tweet id is invalid");
    tweet = (await getTweet(id)) || null;
  } catch (err) {
    if (onError) {
      error = onError(err);
    } else {
      console.error(err);
      error = err;
    }
  }

  if (!tweet) {
    const NotFound = components?.TweetNotFound || TweetNotFound;
    return <NotFound error={error} />;
  }

  return <EmbeddedTweet tweet={tweet} components={components} />;
};

export const ReactTweet = (props: TweetProps) => <TweetContent {...props} />;

export async function TweetComponent({ id }: { id: string }) {
  return (
    <div className="tweet my-6">
      <div className={`flex justify-center`}>
        <ReactTweet id={id} />
      </div>
    </div>
  );
}
