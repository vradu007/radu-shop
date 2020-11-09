import React from 'react';

const Processor = (props) => {
	return (
		<div>
			<p>
				<span className="font-weight-bold">Base Frequency</span>:{" "}
				{props.baseFrequency}GHz
			</p>
			<p>
				<span className="font-weight-bold">Boost frequency</span>:{" "}
				{props.boostFrequency}GHz
			</p>
			<p>
				<span className="font-weight-bold">Cores</span>: {props.cores}
			</p>
			<p>
				<span className="font-weight-bold">Threads</span>: {props.threads}
			</p>
			<p className="font-weight-bold mb-1">Description:</p>
			<p>{props.description}</p>
		</div>
	);
};

const VideoCard = (props) => {
	return (
		<div>
			<p>
				<span className="font-weight-bold">Base Frequency VideoCard</span>:{" "}
				{props.baseFrequency}
			</p>
			<p>
				<span className="font-weight-bold">Boost frequency</span>:{" "}
				{props.boostFrequency}
			</p>
			<p>
				<span className="font-weight-bold">Cores</span>: {props.cores}
			</p>
			<p>
				<span className="font-weight-bold">Threads</span>: {props.threads}
			</p>
			<p className="font-weight-bold mb-1">Description:</p>
			<p>{props.description}</p>
		</div>
	);
};

const Motherboard = (props) => {
	return (
		<div>
			<p>
				<span className="font-weight-bold">Base Frequency</span>:{" "}
				{props.baseFrequency}
			</p>
			<p>
				<span className="font-weight-bold">Boost frequency</span>:{" "}
				{props.boostFrequency}
			</p>
			<p>
				<span className="font-weight-bold">Cores</span>: {props.cores}
			</p>
			<p>
				<span className="font-weight-bold">Threads</span>: {props.threads}
			</p>
			<p className="font-weight-bold mb-1">Description:</p>
			<p>{props.description}</p>
		</div>
	);
};

const Ram = (props) => {
	return (
		<div>
			<p>
				<span className="font-weight-bold">Base Frequency</span>:{" "}
				{props.baseFrequency}
			</p>
			<p>
				<span className="font-weight-bold">Boost frequency</span>:{" "}
				{props.boostFrequency}
			</p>
			<p>
				<span className="font-weight-bold">Cores</span>: {props.cores}
			</p>
			<p>
				<span className="font-weight-bold">Threads</span>: {props.threads}
			</p>
			<p className="font-weight-bold mb-1">Description:</p>
			<p>{props.description}</p>
		</div>
	);
};

const Storage = (props) => {
	return (
		<div>
			<p>
				<span className="font-weight-bold">Base Frequency</span>:{" "}
				{props.baseFrequency}
			</p>
			<p>
				<span className="font-weight-bold">Boost frequency</span>:{" "}
				{props.boostFrequency}
			</p>
			<p>
				<span className="font-weight-bold">Cores</span>: {props.cores}
			</p>
			<p>
				<span className="font-weight-bold">Threads</span>: {props.threads}
			</p>
			<p className="font-weight-bold mb-1">Description:</p>
			<p>{props.description}</p>
		</div>
	);
};

const PowerSupply = (props) => {
	return (
		<div>
			<p>
				<span className="font-weight-bold">Base Frequency</span>:{" "}
				{props.baseFrequency}
			</p>
			<p>
				<span className="font-weight-bold">Boost frequency</span>:{" "}
				{props.boostFrequency}
			</p>
			<p>
				<span className="font-weight-bold">Cores</span>: {props.cores}
			</p>
			<p>
				<span className="font-weight-bold">Threads</span>: {props.threads}
			</p>
			<p className="font-weight-bold mb-1">Description:</p>
			<p>{props.description}</p>
		</div>
	);
};

export {
    Processor,
    VideoCard,
    Motherboard,
    Ram,
    Storage,
    PowerSupply
};