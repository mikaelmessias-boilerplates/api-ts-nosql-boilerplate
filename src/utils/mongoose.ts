import mongoose from 'mongoose';

const connect = (url: string): void => {
  if (!url) {
    return;
  }

  mongoose.connect((url), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default { connect };
