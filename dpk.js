const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  // consts
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  // helper function
  const createNewHash = (updateValue) => {
    // creates a sha3-512 crypto hash, runs .update with parameter value, and digests in hex
    return crypto.createHash("sha3-512").update(updateValue).digest("hex");
  };

  // if event has partition key, use partion key else, createNewHash using the stringified event
  if (event) { candidate = event.partitionKey ? event.partitionKey : createNewHash(JSON.stringify(event)) }

  // if candidate exists and it isnt a string, turn it into a string; else: candidate dosent exist and assign trivial_partition_key to candidate
  if (candidate) {
    if (typeof candidate !== "string") {
      candidate = JSON.stringify(candidate);
    }
  } else {
    candidate = TRIVIAL_PARTITION_KEY;
  }

  // if candidate is longer than 256 char in length, rehash it
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = createNewHash(candidate);
  }

  return candidate;
};