export const AWS_CONFIG =
{
    region: 'us-east-1',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
}

export const EC2_MASTER_NODE = 
{
    instanceType: 'g4dn.xlarge', 
    amiId: 'ami-0abcd1234efgh5678',
    vpcId: 'vpc-12345678', 
    subnetId: 'subnet-12345678', 
    securityGroupId: 'sg-12345678', 
}

export const LOAD_BALANCER_CONFIG = 
{
    maxCPUUsageThreshold: 80,
    maxGPUUsageThreshold: 70, 
    maxRAMUsageThreshold: 85, 
    pollingInterval: 5000,          // Time in ms to check server load
}

export const FAILOVER_CONFIG = {
    retryInterval: 3000,
    maxRetries: 5, 
};