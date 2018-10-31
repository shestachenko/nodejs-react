const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export default (async function asyncValidate(values: any /*, dispatch */) {
  await sleep(1000); // simulate server latency
  if (['foo@foo.com', 'bar@bar.com'].includes(values.email)) {
    throw { email: 'Email already Exists' };
  }
});
