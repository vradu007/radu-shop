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
				<span className="font-weight-bold">Build process</span>: {props.buildProcess}
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
				<span className="font-weight-bold">Target Resolution</span>:{" "}
				{props.targetResolution}
			</p>
			<p>
				<span className="font-weight-bold">VRAM</span>:{" "}
				{props.vram}
			</p>
			<p>
				<span className="font-weight-bold">Brand</span>: {props.brand}
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